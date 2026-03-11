from datetime import date

from django.test import TestCase

from .models import EventNews, HeroReview, RestaurantMenuItem, RestaurantMenuSection


class EventNewsApiTests(TestCase):
    def test_returns_latest_active_event_news(self):
        EventNews.objects.create(
            title="Inactive event",
            summary="Should not show",
            event_date=date(2026, 3, 20),
            is_active=False,
        )
        EventNews.objects.create(
            title="Spring pop-up",
            summary="See us at Commerce Court for a special lunch service.",
            badge="Upcoming Event",
            event_date=date(2026, 4, 1),
            cta_label="View Schedule",
            cta_url="/schedule",
            is_active=True,
        )

        response = self.client.get("/api/news/event/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["title"], "Spring pop-up")

    def test_returns_empty_object_when_no_active_news_exists(self):
        EventNews.objects.all().delete()

        response = self.client.get("/api/news/event/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {})


class RestaurantMenuApiTests(TestCase):
    def test_returns_active_sections_with_active_items(self):
        RestaurantMenuItem.objects.all().delete()
        RestaurantMenuSection.objects.all().delete()

        section = RestaurantMenuSection.objects.create(
            title="Grilled Sandwiches",
            slug="grilled-sandwiches",
            display_order=1,
            is_active=True,
        )
        RestaurantMenuItem.objects.create(
            section=section,
            name="Grilled Atlantic Salmon Sandwich",
            description="Atlantic Salmon grilled to perfection.",
            price="$13.95",
            display_order=1,
            is_active=True,
        )
        RestaurantMenuItem.objects.create(
            section=section,
            name="Hidden item",
            description="Should not render",
            price="$0.00",
            display_order=2,
            is_active=False,
        )

        response = self.client.get("/api/restaurant/menu/")

        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["title"], "Grilled Sandwiches")
        self.assertEqual(len(data[0]["items"]), 1)
        self.assertEqual(data[0]["items"][0]["name"], "Grilled Atlantic Salmon Sandwich")


class HeroReviewApiTests(TestCase):
    def test_returns_first_active_hero_review(self):
        HeroReview.objects.create(
            quote="Hidden review",
            attribution="Google Reviews",
            rating=4,
            display_order=2,
            is_active=False,
        )
        HeroReview.objects.create(
            quote="Best lobster roll in Toronto! Fresh, fast, and always consistent.",
            attribution="Google Reviews",
            rating=5,
            display_order=1,
            is_active=True,
        )

        response = self.client.get("/api/reviews/hero/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["attribution"], "Google Reviews")
        self.assertEqual(response.json()["rating"], 5)

    def test_returns_empty_object_when_no_active_hero_review_exists(self):
        HeroReview.objects.all().delete()

        response = self.client.get("/api/reviews/hero/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {})
