# Changelog

## v1.0.0 — First complete release

The first version considered finished and free of major issues. The occlusion engine was
rewritten, the interface reworked and finished in English, and everything found along the
way fixed.

### Fog of war and walls
- Fixed light passing through walls depending on which side you stood on. Visibility was
  built from two different angle ranges, so a wall above a token could fail to cast its
  shadow — which is why closed rooms looked right and lone walls did not
- Doors are now per segment: a corridor drawn in one stroke can open at a single span
- One-way walls, blocking from whichever side you choose and marked on the map
- Insert a vertex into an existing wall or polygon, and start a wall on top of another
- Select several segments — or a whole wall with a double click — and open or orient them
  in one action
- Wall editing is undoable, including stepping back one vertex at a time while drawing
- A token standing exactly on a wall no longer loses all vision
- The fog mask no longer softens a little more every time a scene is loaded and saved
- Painting fog in dynamic mode now explains itself instead of silently disappearing

### Interface
- A getting-started checklist covering the two settings the table scale depends on, so a
  wrongly scaled table stops being something you discover by accident
- Fixed panels overlapping each other along the bottom of the screen
- Grid snapping is set per tool: measuring freehand no longer unsettles walls or tokens
- Tool instructions moved into their own dismissible panel, out of the toolbar
- Tabs reordered to Table, Library, Scene, Effects, Combat
- Active effects moved to the Effects tab, alongside the catalog
- Collapsed sections stay collapsed between sessions
- Scenes can be reordered by dragging
- Dialogs and messages are announced to screen readers, keyboard focus stays inside open
  dialogs, and text can be selected and copied again
- Every remaining Spanish string translated; all confirmations use the in-app dialog

### Combat
- Death saves resolve at three: stable or dead, shown where you mark them
- Taking damage at 0 hit points records a failed save automatically
- The initiative list on the table screen shrinks to fit instead of running off the bottom
- Removed the round counter and per-effect durations

### Reliability
- A failed save is reported on screen instead of only reaching the console, with a
  separate message when browser storage is full
- Undo and redo no longer apply one scene's work to another, and a new edit no longer
  leaves a stale redo armed
- Animated effects release their video when they leave the scene
- Fog undo history uses a fraction of the memory on large maps

## v1.0 — First public release

The first version published as VeilCast VTT, translated to English.

### Maps and scale
- Image and `.uvtt` / `.dd2vtt` / `.df2vtt` import, with automatic calibration
- Physical DPI calibration against a real table grid
- Adjustable grid origin per scene
- Independent framing between the DM view and the table view

### Fog of war and lighting
- Manual fog with brush, cell, rectangle and lasso tools
- Exploration and dynamic reveal modes driven by token movement
- Ray-cast visibility against occlusion walls, with doors that open and close
- Built-in wall editor: segments and closed polygons drawn on any map

### Effects
- 662-effect JB2A catalog with search, favourites and recents
- Streamed on first use and cached offline afterwards
- Hand-drawn textured markers for terrain and hazards
- Blend modes and per-effect opacity

### Combat
- Campaigns with persistent players whose HP combat updates directly
- Initiative tracker with temporary HP, conditions, death saves and concentration prompts
- Multi-target damage with full or half application
- Long rest with confirmation and undo

### Organisation
- Multiple campaigns, each isolated
- Autosave to browser storage
- Single-file campaign export and import
