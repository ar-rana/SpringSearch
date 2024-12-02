FROM ollama/ollama

ENTRYPOINT ["/ollama", "run", "llama3"]


# docker build -t ollama-local .  <-on cmd