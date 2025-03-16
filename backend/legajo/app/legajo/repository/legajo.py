from abc import ABC, abstractmethod
from fastapi import Depends
from sqlmodel import SQLModel, select
from models import (Legajo)
from sqlmodel.ext.asyncio.session import AsyncSession
from core.database.session import get_session
from app.legajo.exceptions import (LegajoNotFoundException)

class LegajoRepositoryBase(ABC):

	@abstractmethod
	async def get_legajo(self, legajo_id):
		...

	@abstractmethod
	async def get_legajo_by_dni(self, legajo_dni):
		...

	@abstractmethod
	async def save(self, legajo: Legajo):
		...

	@abstractmethod
	async def update(self, legajo: Legajo):
		...

	@abstractmethod
	async def delete(self, legajo: Legajo):
		...

class LegajoRepository(LegajoRepositoryBase):
	
	def __init__(self, db_session : AsyncSession = Depends(get_session)):
		self.session = db_session

	async def get_legajos(self):
		stmt = select(Legajo)
		legajos = await self.session.exec(stmt)
		return legajos.all()

	async def get_legajo(self, legajo_id : int):
		legajo = await self.session.get(Legajo,legajo_id)
		return legajo

	async def get_legajo_by_dni(self, legajo_dni : str):
		stmt = select(Legajo).where(Legajo.doc_num == legajo_dni)
		legajo = await self.session.exec(stmt)
		return legajo.first()


	async def save(self, legajo: Legajo):
		self.session.add(legajo)


	async def update(self, legajo_id: int, modelo_legajo: SQLModel):
		legajo = await self.session.get(Legajo,legajo_id)
		if not legajo:
			raise LegajoNotFoundException
		legajo.sqlmodel_update(modelo_legajo)
		self.session.add(legajo)
		return legajo
		

	async def delete(self, legajo: Legajo):
		await self.session.delete(legajo)

