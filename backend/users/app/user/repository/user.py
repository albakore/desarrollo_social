from abc import ABC, abstractmethod
from fastapi import Depends
from sqlmodel import SQLModel, select
from models import (User)
from sqlmodel.ext.asyncio.session import AsyncSession
from core.database.session import get_session
from app.user.exceptions import (UserNotFoundException)

class UserRepositoryBase(ABC):

	@abstractmethod
	async def get_user(self, user_id):
		...

	@abstractmethod
	async def get_user_by_dni(self, user_dni):
		...

	@abstractmethod
	async def save(self, user: User):
		...

	@abstractmethod
	async def update(self, user: User):
		...

	@abstractmethod
	async def delete(self, user: User):
		...

class UserRepository(UserRepositoryBase):
	
	def __init__(self, db_session : AsyncSession = Depends(get_session)):
		self.session = db_session

	async def get_users(self):
		stmt = select(User)
		users = await self.session.exec(stmt)
		return users.all()

	async def get_user(self, user_id : int):
		user = await self.session.get(User,user_id)
		return user

	async def get_user_by_dni(self, user_dni : str):
		stmt = select(User).where(User.doc_num == user_dni)
		user = await self.session.exec(stmt)
		return user.first()


	async def save(self, user: User):
		self.session.add(user)


	async def update(self, user_id: int, modelo_user: SQLModel):
		user = await self.session.get(User,user_id)
		if not user:
			raise UserNotFoundException
		user.sqlmodel_update(modelo_user)
		self.session.add(user)
		return user
		

	async def delete(self, user: User):
		await self.session.delete(user)

