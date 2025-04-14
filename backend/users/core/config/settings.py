import os
from pydantic_settings import BaseSettings

class Config(BaseSettings):
    ENV: str = "development"
    DEBUG: bool = True
    APP_HOST: str = "0.0.0.0"
    APP_PORT: int = 8000
    DB_URL: str = "postgresql+psycopg://postgres:root@127.0.0.1:5431/postgres"
    JWT_SECRET_KEY: str = "fastapi"
    JWT_ALGORITHM: str = "HS256"
    CELERY_BROKER_URL: str = "amqp://user:bitnami@127.0.0.1:5672/"
    CELERY_BACKEND_URL: str = "redis://:password123@127.0.0.1:6379/0"

class DevelopmentConfig(Config):
    DB_URL: str = "postgresql+psycopg://postgres:root@127.0.0.1:5431/postgres"


class LocalConfig(Config):
    DB_URL: str = "postgresql+psycopg://postgres:root@127.0.0.1:5431/postgres"


class ProductionConfig(Config):
    DEBUG: bool = False
    DB_URL: str = "postgresql+psycopg://postgres:root@127.0.0.1:5431/postgres"

def get_config():
    env = os.getenv("ENV", "local")
    config_type = {
        "development": DevelopmentConfig(),
        "local": LocalConfig(),
        "production": ProductionConfig(),
    }
    return config_type[env]


env : Config = get_config()
