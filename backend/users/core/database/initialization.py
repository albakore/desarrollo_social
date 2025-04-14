from .session import async_engine
from sqlmodel import SQLModel
async def init_db():
	async with async_engine.begin() as conn:
		from models import __all__  # noqa: F401
		await conn.run_sync(SQLModel.metadata.create_all)