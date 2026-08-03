"""update reports table

Revision ID: 19d1cc659c99
Revises: 
Create Date: 2026-08-03 20:45:20.662652

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '19d1cc659c99'
down_revision: Union[str, Sequence[str], None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    conn = op.get_bind()
    inspector = sa.inspect(conn)

    if 'reports' not in inspector.get_table_names():
        op.create_table(
            'reports',
            sa.Column('id', sa.Integer(), primary_key=True, nullable=False),
            sa.Column('name', sa.String(length=150), nullable=False),
            sa.Column('type', sa.String(length=50), nullable=False),
            sa.Column('period', sa.String(length=100), nullable=False),
            sa.Column('status', sa.String(length=30), nullable=False),
            sa.Column('devices', sa.Integer(), nullable=False),
            sa.Column('uptime', sa.Float(), nullable=False),
            sa.Column('incidents', sa.Integer(), nullable=False),
            sa.Column('created_at', sa.DateTime(), nullable=False),
        )
        return

    existing_columns = {col['name'] for col in inspector.get_columns('reports')}

    if 'name' not in existing_columns:
        op.add_column('reports', sa.Column('name', sa.String(length=150), nullable=False))
    if 'type' not in existing_columns:
        op.add_column('reports', sa.Column('type', sa.String(length=50), nullable=False))
    if 'period' not in existing_columns:
        op.add_column('reports', sa.Column('period', sa.String(length=100), nullable=False))
    if 'devices' not in existing_columns:
        op.add_column('reports', sa.Column('devices', sa.Integer(), nullable=False))
    if 'uptime' not in existing_columns:
        op.add_column('reports', sa.Column('uptime', sa.Float(), nullable=False))
    if 'incidents' not in existing_columns:
        op.add_column('reports', sa.Column('incidents', sa.Integer(), nullable=False))

    if 'title' in existing_columns:
        op.drop_column('reports', 'title')
    if 'report_type' in existing_columns:
        op.drop_column('reports', 'report_type')
    if 'file_path' in existing_columns:
        op.drop_column('reports', 'file_path')

    if not inspector.get_indexes('reports'):
        op.create_index(op.f('ix_reports_id'), 'reports', ['id'], unique=False)


def downgrade() -> None:
    """Downgrade schema."""
    conn = op.get_bind()
    inspector = sa.inspect(conn)
    existing_columns = {col['name'] for col in inspector.get_columns('reports')}

    if 'file_path' not in existing_columns:
        op.add_column('reports', sa.Column('file_path', sa.VARCHAR(length=255), nullable=True))
    if 'report_type' not in existing_columns:
        op.add_column('reports', sa.Column('report_type', sa.VARCHAR(length=50), nullable=True))
    if 'title' not in existing_columns:
        op.add_column('reports', sa.Column('title', sa.VARCHAR(length=150), nullable=True))

    if 'name' in existing_columns:
        op.drop_column('reports', 'name')
    if 'type' in existing_columns:
        op.drop_column('reports', 'type')
    if 'period' in existing_columns:
        op.drop_column('reports', 'period')
    if 'devices' in existing_columns:
        op.drop_column('reports', 'devices')
    if 'uptime' in existing_columns:
        op.drop_column('reports', 'uptime')
    if 'incidents' in existing_columns:
        op.drop_column('reports', 'incidents')
