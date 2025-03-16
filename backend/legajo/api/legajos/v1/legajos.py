from fastapi import APIRouter
from app.legajo.dependencies.legajo import (
	DLegajoRepository,
	DLegajoService
)
from api.legajos.v1.request import *

legajos = APIRouter()

@legajos.get("")
async def get_all_legajos(
	legajo_service = DLegajoService
):
	legajos = await legajo_service.get_legajos()
	return legajos

@legajos.get("/{id}")
async def get_legajo(
	id : int,
	legajo_service = DLegajoService
):
	legajo = await legajo_service.get_legajo(int(id))
	return legajo

@legajos.post("")
async def create_legajo(
	nuevo_legajo : CreateLegajoRequest,
	legajo_service = DLegajoService
):
	legajo = await legajo_service.create_legajo(nuevo_legajo)
	return legajo

@legajos.put("/{id}")
async def update_legajo(
	id : int,
	legajo_modificado : UpdateLegajoRequest,
	legajo_service = DLegajoService
):
	legajo = legajo_service.update_legajo(int(id),legajo_modificado)
	return legajo

@legajos.delete("/{id}")
async def delete_legajo(
	id : int,
	legajo_service = DLegajoService
):
	data = await legajo_service.delete_legajo(int(id))
	return data