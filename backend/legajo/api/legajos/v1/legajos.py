from fastapi import APIRouter

legajos = APIRouter()

@legajos.get("")
def get_all_legajos():
	return ...

@legajos.get("/{id}")
def get_legajo():
	return ...

@legajos.post("")
def create_legajo():
	return ...

@legajos.put("/{id}")
def update_legajo():
	return ...

@legajos.delete("/{id}")
def delete_legajo():
	return ...