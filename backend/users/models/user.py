from sqlmodel import SQLModel, Field
from typing import Optional


class User(SQLModel):
	id : Optional[int] = Field(default=None, primary_key=True)
	nombre : str
	apellido : str
	doc_tipo : str
	doc_num : str
	# nacionalidad : str
	# provincia : str
	# codigo_postal : str
	# direccion_calle : str
	# direccion_num : str
	# direccion_piso : str
	# direccion_depart : str
	# locacion_x : str
	# locacion_y : str
