# VeilCast VTT

**A virtual tabletop built for the physical table.**

VeilCast is a free, open-source VTT designed for groups that play in person around a
screen laid flat in the table — with real miniatures on top of it. It runs entirely in
your browser, needs no account, no subscription and no cloud, and every map you load
stays on your own machine.

👉 **[Launch VeilCast](https://cr-lolo.github.io/veilcast-vtt/)** — no install required

---

## Why another VTT?

Most virtual tabletops assume everyone is remote. VeilCast assumes the opposite: your
group is around a physical table, moving real minis, and the screen underneath is a
*map that can do things paper can't*.

That single assumption changes the whole design:

- **Two windows, one state.** You drive from your laptop; the table shows only what
  the players should see. No fiddling, no mirroring, no lag.
- **Real-world scale.** Calibrate once against the grid on your table, and a 20 ft
  radius on screen is genuinely 20 ft on the table. Miniatures line up with the squares.
- **The DM's screen is not the players' screen.** Fog you can see through, walls only
  you can see, tokens the table never shows unless you want it to.

---

## Features

**Maps and scale**
- Import any image, or a `.uvtt` / `.dd2vtt` file with walls, doors and lights already defined
- Physical calibration for your table's DPI so the grid matches your acrylic overlay
- Grid origin offset for maps whose squares don't start at the corner
- Independent framing: zoom around freely without moving what the table shows

**Fog of war and dynamic lighting**
- Manual painting with brush, square, rectangle and lasso tools
- **Exploration mode** — tokens reveal the map as they move, and what's seen stays seen
- **Dynamic mode** — only what tokens can see right now
- Real ray-cast visibility against occlusion walls: turn a corner and the room opens up
- Doors you can open and close mid-session, with instant recalculation
- Draw your own occlusion walls on any map, as segments or closed polygons

**Effects and measurement**
- 662 animated spell effects from the JB2A library, streamed on demand and cached offline
- Searchable catalog by spell, level, favourites and recently used
- Hand-drawn effect markers with textures and labels for terrain, hazards and zones
- Measurement in line, circle, cone, square and wall, with 5e / Euclidean / alternating rules
- Fixed-distance measuring: type 30 ft and place it with one click

**Combat**
- Campaign players with persistent HP that combat updates directly
- Initiative tracker with temporary HP, 16 conditions and death saves
- Damage, healing and temp HP by keyboard or panel
- Apply damage to several targets at once, full or half for saves
- Concentration prompts with the DC already calculated
- Long rest, with confirmation and undo

**Organisation**
- Multiple campaigns, each with its own scenes, players and state
- Everything autosaves to your browser — close and reopen and it's all there
- Export a campaign as a single file to back it up or hand it to another DM

---

## Getting started

1. Open **[the app](https://cr-lolo.github.io/veilcast-vtt/)** in a Chromium-based
   browser (Chrome, Brave, Edge).
2. Click **Install as app** in the Table tab for a windowed, offline-capable install.
3. Add a map in the Library tab, then calibrate a square with `K`.
4. Open the table view, drag it to your table monitor, and set the monitor diagonal
   so the scale matches your physical grid.

Press `?` at any time for the full keyboard shortcut list.

---

## Requirements

A Chromium-based browser and a second screen. That's it.

Some conveniences — opening the table view directly on the right monitor — depend on
the Window Management API, which Brave may restrict. Everything else works regardless.

---

## Credits

Animated effects come from **[JB2A — Jules & Ben's Animated Assets](https://jb2a.com)**,
licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
They are downloaded from the JB2A repository at runtime and are not redistributed here.

Condition icons from **[game-icons.net](https://game-icons.net)**.

---

## Support

VeilCast is free and always will be. If it earns its place at your table and you'd
like to support the work, there's a [Ko-fi](https://ko-fi.com/) — entirely optional,
and it goes straight back into the roadmap.

---

## License

MIT — see [LICENSE](LICENSE). Third-party assets keep their own licenses as noted above.
