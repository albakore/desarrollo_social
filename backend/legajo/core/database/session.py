from sqlmodel.ext.asyncio.session import AsyncSession
from sqlalchemy.ext.asyncio import (async_sessionmaker, create_async_engine)

from core.config.settings import env

async_engine = create_async_engine(env.DB_URL, echo=True)

async def get_session():
	async_session = async_sessionmaker(
		bind=async_engine,
		class_=AsyncSession,
		expire_on_commit=False
	)

	async with async_session() as session:
		yield session
