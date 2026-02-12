import multiprocessing
import os

# Server socket
bind = "0.0.0.0:8000"
backlog = 2048

# Worker processes
# Gunicorn relies on the operating system to provide all of the load balancing when handling requests.
# Generally we recommend (2 x num_cores) + 1 as the number of workers to start off with.
workers = int(os.getenv("WORKERS", multiprocessing.cpu_count() * 2 + 1))
worker_class = "uvicorn.workers.UvicornWorker"
worker_connections = 1000
timeout = 30
keepalive = 2

# Logging
errorlog = "-"
accesslog = "-"
loglevel = "info"