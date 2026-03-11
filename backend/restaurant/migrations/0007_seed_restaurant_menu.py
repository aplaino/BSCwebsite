from django.db import migrations


def seed_restaurant_menu(apps, schema_editor):
    Section = apps.get_model("restaurant", "RestaurantMenuSection")
    Item = apps.get_model("restaurant", "RestaurantMenuItem")

    if Section.objects.exists() or Item.objects.exists():
        return

    sections = [
        {
            "title": "Grilled Sandwiches",
            "slug": "grilled-sandwiches",
            "display_order": 1,
            "items": [
                ("Grilled Atlantic Salmon Sandwich", "Atlantic Salmon grilled to perfection & served atop a scrumptious sandwich.", "$13.95", "/Images/Menu/Salmon .jpg"),
                ("Grilled Swordfish Sandwich", "Sashimi grade Swordfish grilled to perfection & served atop a delicious sandwich.", "$14.95", "/Images/Menu/Swordfish .jpg"),
                ("Grilled Tilapia Sandwich", "Fresh Tilapia, grilled to perfection & served atop a scrumptious sandwich.", "$12.95", "/Images/Menu/Tilapia .jpg"),
                ("Grilled Rainbow Trout Sandwich", "Fresh rainbow Trout, grilled to perfection & served as a delicious sandwich.", "$14.95", "/Images/Menu/Rainbow Trout closeup.jpg"),
                ("Grilled Snapper Sandwich", "Fresh Red Snapper, grilled to perfection & served atop a scrumptious sandwich.", "$13.95", "/Images/Menu/Snapper Sandwich .jpg"),
                ("Grilled Halibut Sandwich", "Perfectly grilled halibut. Served as a delicious sandwich.", "$15.95", "/Images/Menu/Gr Halibut .jpg"),
            ],
        },
        {
            "title": "Lobster",
            "slug": "lobster",
            "display_order": 2,
            "items": [
                ("Lobster Roll", "Atlantic Lobster stuffed in a perfectly toasted potato bun.", "$23.95", "/Images/Menu/Lobster Roll .jpg"),
                ("Lobster Grilled Cheese", "Atlantic Lobster stuffed in a traditional grilled cheese.", "$24.95", "/Images/Menu/Lobster Grilled Cheese Closeup .jpg"),
            ],
        },
        {
            "title": "From The Grill",
            "slug": "from-the-grill",
            "display_order": 3,
            "items": [
                ("Seared Ahi Tuna", "Pan seared rare Ahi Tuna.", "$19.95", "/Images/Menu/Seared Ahi Tuna salad.jpg"),
                ("Grilled Atlantic Salmon", "Atlantic Salmon grilled to perfection.", "$17.95", "/Images/Menu/Salmon .jpg"),
                ("Grilled Tilapia", "Fresh grilled Tilapia.", "$16.95", "/Images/Menu/Tilapia .jpg"),
                ("Grilled Red Snapper", "Slightly sweet grilled Red Snapper.", "$17.95", "/Images/Menu/Snapper .jpg"),
                ("Grilled Halibut", "Very lean grilled Halibut.", "$19.95", "/Images/Menu/Gr Halibut .jpg"),
                ("Grilled Swordfish", "Mild meaty grilled Swordfish.", "$18.95", "/Images/Menu/Swordfish .jpg"),
                ("Grilled Rainbow Trout", "Mildly grilled Rainbow Trout.", "$18.95", "/Images/Menu/Rainbow Trout .jpg"),
                ("Grilled Octopus", "BBQ'd Moroccan Octopus.", "$23.95", "/Images/Menu/Octopus .jpg"),
                ("Grilled Calamari", "Perfectly grilled tender Calamari.", "$17.95", "/Images/Menu/Gr Calamari .jpg"),
                ("Grilled Mahi Mahi", "Perfectly grilled mahi mahi", "$16.95", ""),
                ("Grilled Jumbo Tiger Shrimp", "Jumbo shrimp grilled to perfection", "$19.95", ""),
            ],
        },
        {
            "title": "Fish Fry",
            "slug": "fish-fry",
            "display_order": 4,
            "items": [
                ("Halibut & Chips", "Battered and deep fried Halibut. Served with fries and coleslaw.", "$19.95", "/Images/Menu/Halibut & Chips .jpg"),
                ("Calamari & Chips", "Lightly breaded and deep fried calamari. Served with fries and coleslaw.", "$16.95", "/Images/Menu/Calamari & Chips .jpg"),
                ("Haddock & Chips", "Freshly breaded and deep fried haddock. Served with fries and coleslaw.", "$15.95", "/Images/Menu/Haddock & Chips .jpg"),
                ("Shrimp & Chips", "Freshly breaded and deep fried shrimps. Served with fries and coleslaw.", "$16.95", ""),
            ],
        },
        {
            "title": "Fried Sandwiches & Po' Boys",
            "slug": "fried-sandwiches-po-boys",
            "display_order": 5,
            "items": [
                ("Shrimp Po' Boy Sandwich", "Delicious deep fried Shrimp served on scrumptious focaccia bread.", "$12.95", ""),
                ("Calamari Po' Boy Sandwich", "Delicious deep fried Calamari served on scrumptious focaccia bread.", "$12.95", ""),
                ("Fried Halibut Sandwich", "A delicious fried Halibut sandwich served on a bun.", "$15.95", ""),
            ],
        },
        {
            "title": "Soups",
            "slug": "soups",
            "display_order": 6,
            "items": [
                ("Chicken Shrimp Gumbo", "", "$7.75", "/Images/Menu/Soups .jpg"),
                ("Lobster Bisque", "", "$9.95", "/Images/Menu/Soups .jpg"),
                ("New England Clam Chowder", "", "$8.25", "/Images/Menu/Soups .jpg"),
            ],
        },
        {
            "title": "Beverages",
            "slug": "beverages",
            "display_order": 7,
            "items": [
                ("Coke", "", "$2.00", ""),
                ("Diet Coke", "", "$2.00", ""),
                ("Coke Zero", "", "$2.00", ""),
                ("Ginger Ale", "", "$2.00", ""),
                ("Nestea Iced Tea", "", "$2.00", ""),
                ("Orange San Pellegrino", "", "$3.00", ""),
                ("Lemon San Pellegrino", "", "$3.00", ""),
                ("Grapefruit San Pellegrino", "", "$3.00", ""),
                ("Perrier Mineral Water", "", "$3.00", ""),
                ("Bottled Water", "", "$2.00", ""),
            ],
        },
    ]

    for section_data in sections:
        section = Section.objects.create(
            title=section_data["title"],
            slug=section_data["slug"],
            display_order=section_data["display_order"],
            is_active=True,
        )
        for index, (name, description, price, image_url) in enumerate(section_data["items"], start=1):
            Item.objects.create(
                section=section,
                name=name,
                description=description,
                price=price,
                image_url=image_url,
                display_order=index,
                is_active=True,
            )


def remove_seed_restaurant_menu(apps, schema_editor):
    Section = apps.get_model("restaurant", "RestaurantMenuSection")
    Section.objects.filter(
        slug__in=[
            "grilled-sandwiches",
            "lobster",
            "from-the-grill",
            "fish-fry",
            "fried-sandwiches-po-boys",
            "soups",
            "beverages",
        ]
    ).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0006_restaurantmenusection_restaurantmenuitem"),
    ]

    operations = [
        migrations.RunPython(seed_restaurant_menu, remove_seed_restaurant_menu),
    ]
