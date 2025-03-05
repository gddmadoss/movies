import sounds from "./sounds.json" with { type: "json" };

if (import.meta.main) {
  Deno.serve((request: Request) => {
    const url = new URL(request.url);
    if (url.pathname === "/favicon.ico") {
      return new Response(
        "",
        { headers: { "Location": "https://fartlabs.org/fl-logo.png" } },
      );
    }

    const id = url.pathname === "/"
      ? Math.floor(Math.random() * sounds.length)
      : Number(url.pathname.slice(1));
    if (Number.isNaN(id)) {
      throw new Error("ID is not a number");
    }

    if (id > sounds.length - 1) {
      throw new Error("ID is out of range");
    }

    const sound = makeSoundURL(sounds[id]);
    return fetch(sound);
  });
}

// Lifted from
// https://github.com/FartLabs/concentration/blob/52182ee29da3cc57eef0033fec067fd4933bf529/src/lib/sounds/sounds.ts
//

export interface SoundData {
  sound: string;
}

export function makeSoundURL(data: SoundData) {
  return `https://github.com/gddmadoss/movies/raw/main/sounds/${data.sound}`;
}

export { sounds };
