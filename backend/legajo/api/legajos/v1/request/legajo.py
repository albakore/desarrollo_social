from pydantic import BaseModel

class CreateLegajoRequest(BaseModel):
	nombre: str
	apellido: str
	doc_tipo: str
	doc_num: str

	class Config:
		schema_extra = {
			"example": {
				"nombre": "Kevin",
				"apellido": "Kener",
				"doc_tipo": "DNI",
				"doc_num": "39483885",
			}
		}

class UpdateLegajoRequest(BaseModel):
	nombre: str
	apellido: str
	doc_tipo: str
	doc_num: str

	class Config:
		schema_extra = {
			"example": {
				"nombre": "Kevin",
				"apellido": "Kener",
				"doc_tipo": "DNI",
				"doc_num": "39483885",
			}
		}