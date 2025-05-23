from fastapi import APIRouter
from .users import v1_router
root_router = APIRouter()
root_router.include_router(
	v1_router,
	prefix='/users'
)
