from fastapi import APIRouter
from api.users.v1 import router as v1_router

user_router = APIRouter()
user_router.include_router(
	v1_router,
	prefix="/v1"
)