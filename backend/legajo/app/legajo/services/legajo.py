from abc import ABC, abstractmethod

from fastapi import Depends
from pydantic import BaseModel
from sqlmodel import SQLModel, select
from sqlmodel.ext.asyncio.session import AsyncSession
from app.legajo.repository.legajo import LegajoRepository
from core.database.session import get_session
from models import Legajo
from app.legajo.exceptions.legajos import LegajoNotFoundException

class LegajoServiceBase(ABC):

	@abstractmethod
	def get_legajos(self):
		...
	
	@abstractmethod
	def get_legajo(self, legajo_id: int):
		...
	
	@abstractmethod
	def create_legajo(self):
		...
	
	@abstractmethod
	def update_legajo(self, legajo_id: int, modificacion: SQLModel):
		...
	
	@abstractmethod
	def delete_legajo(self, legajo_id: int):
		...

class LegajoService(LegajoServiceBase):

	def __init__(self, db_session : AsyncSession = Depends(get_session)):
		self.repo = LegajoRepository(db_session)
		

	async def get_legajos(self):
		data = await self.repo.get_legajos()
		return data

	async def get_legajo(self, legajo_id: int):
		legajo = await self.repo.get_legajo(legajo_id)
		return legajo

	async def create_legajo(self, new_legajo : BaseModel):
		legajo = Legajo.model_validate(new_legajo)
		async with self.repo.session.begin():
			try:
				await self.repo.save(legajo) 
				await self.repo.session.commit()
				await self.repo.session.refresh(legajo)
			except Exception as e:
				await self.repo.session.rollback()
				raise e
			return legajo

	async def update_legajo(self, legajo_id: int, modificacion: BaseModel):
		async with self.repo.session.begin():
			try:
				legajo = Legajo.model_validate(modificacion)
				legajo_modificado = await self.repo.update(legajo_id,legajo)
				await self.repo.session.commit()
				await self.repo.session.refresh(legajo_modificado)
			except Exception as e:
				await self.repo.session.rollback()
				raise e
			return legajo_modificado

	async def delete_legajo(self, legajo_id: int):
		async with self.repo.session.begin():
			try:
				legajo = await self.repo.get_legajo(legajo_id)
				if not legajo:
					raise LegajoNotFoundException
				await self.repo.delete(legajo)
				await self.repo.session.commit()
				return True
			except Exception as e:
				await self.repo.session.rollback()
				raise e

