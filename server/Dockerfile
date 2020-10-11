FROM hayd/debian-deno:1.4.0
ENV PORT=5000
EXPOSE 5000
WORKDIR /app
USER deno
COPY . ./
RUN /bin/bash -c "deno cache deps.ts || true"
ADD . .
RUN deno cache main.ts
CMD ["run", "--allow-net", "main.ts"]