FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install fastapi uvicorn
# Меняем main:app на app:app, так как файл называется app.py
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "5000"]