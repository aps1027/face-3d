FROM hayd/debian-deno:1.3.3

ENV DENON_VERSION=2.3.3

RUN deno install --allow-read --allow-run --allow-write --allow-net \
        -f -q --unstable https://deno.land/x/denon@${DENON_VERSION}/denon.ts

ENV PATH "/root/.deno/bin:$PATH"