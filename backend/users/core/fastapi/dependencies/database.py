from fastapi import Depends
from core.database.session import get_session
from sqlmodel.ext.asyncio.session import AsyncSession

DBSession : AsyncSession = Depends(get_session)