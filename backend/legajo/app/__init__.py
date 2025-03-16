from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
import tomllib
from core.fastapi.dependencies.logging import Logging
from core.config.settings import env
from api import root_router
from core.database.initialization import init_db
    

def load_pyproject():
    with open("pyproject.toml", "rb") as f:
    	return tomllib.load(f)

def init_cors(app: FastAPI) -> None:
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

def init_routers(app: FastAPI) -> None:
    app.include_router(root_router)

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

def create_app() -> FastAPI:
    pyproject = load_pyproject()
    app = FastAPI(
        title=pyproject['project']['name'],
        description=pyproject['project']['description'],
        version=pyproject['project']['version'],
        docs_url=None if env.ENV == "production" else "/docs",
        redoc_url=None if env.ENV == "production" else "/redoc",
        dependencies=[Depends(Logging)],
        lifespan=lifespan
    )
    init_routers(app=app)
    init_cors(app=app)
    return app

