# Generated by Django 3.1.4 on 2021-10-25 08:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0002_profile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='marcket_price',
            new_name='market_price',
        ),
    ]
