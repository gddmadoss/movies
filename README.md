# Fart Movie Collection

> It is not ok!!

<img width="386" alt="It is not ok!!" src="https://github.com/gddmadoss/movies/assets/31261035/07c3ca46-d0be-43e0-bb3e-59eb77f365f3">

## YouTube mirrors

- [Original](https://youtu.be/KrSeBDBCI0A)
- [Sequel](https://youtu.be/EDzhgm5NXqA)

## Sounds API

Run the HTTP server.

```sh
deno --allow-net sounds.ts
```

Example usage:

```js
export function playSound(data) {
  return playAudio(new Audio("https://farts.deno.dev/"));
}

export function playAudio(audio) {
  audio.play();

  return new Promise((resolve, reject) => {
    audio.onended = () => resolve();
    audio.onerror = (e) => reject(e);
  });
}
```
