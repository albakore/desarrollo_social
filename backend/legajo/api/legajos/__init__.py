from fastapi import APIRouter
from api.legajos.v1 import router as v1_router

legajo_router = APIRouter()
legajo_router.include_router(
	v1_router,
	prefix="/v1"
)