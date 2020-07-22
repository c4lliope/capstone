# Generated by Django 2.2.13 on 2020-07-22 15:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capdb', '0107_auto_20200722_1522'),
    ]

    operations = [
        # default last_updated to beginning of sys_period
        # use session_replication_role = replica to disable triggers and avoid creating new versions while
        # filling default values
        migrations.RunSQL(
            """
                SET session_replication_role = replica;
                UPDATE capdb_casemetadata SET last_updated = lower(sys_period);
                SET session_replication_role = DEFAULT;
            """,
            migrations.RunSQL.noop,
        )
    ]
