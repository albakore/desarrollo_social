from fastapi import Depends
from core.database.session import get_session
from app.legajo.services.legajo import LegajoService
from app.legajo.repository.legajo import LegajoRepository

DLegajoRepository: LegajoRepository = Depends(LegajoRepository)
DLegajoService : LegajoService = Depends(LegajoService)

