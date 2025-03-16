from fastapi import APIRouter
from .legajos import legajos

router = APIRouter()
router.include_router(
	legajos,
	prefix="/legajos"
	)
