from abc import ABC, abstractmethod
from models import (Legajo)
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
	async def delete(self, legajo: Legajo):
		...

class LegajoRepository(LegajoRepositoryBase):
	
	async def get_legajo(self, legajo_id):
		raise NotImplementedError

	async def get_legajo_by_dni(self, legajo_dni):
		raise NotImplementedError

	async def save(self, legajo: Legajo):
		raise NotImplementedError

	async def delete(self, legajo: Legajo):
		raise NotImplementedError

