# Changelog

## v1.1.0 — Working from the map

Almost all of this release comes from one piece of feedback: doing anything to something
already on the map meant leaving the map. Place an effect, move a token, measure a
distance — three trips to the toolbar. Each is one gesture now, and the things on the map
finally behave as one set instead of three separate systems.

### Selecting and moving
- Hold Ctrl (or Cmd) from any tool and the next click selects instead of placing. Release
  it and you are back where you were, mid-placement, with nothing lost
- Player tokens are part of the selection: pick them, drag them alongside effects, delete
  them, undo it. Deleting a token takes it off that map only — the character, their hit
  points and their tokens on other scenes are untouched
- One selection rule everywhere: a click replaces, Shift adds or removes, and whatever is
  on top answers first, tokens included
- What is selected is finally visible. Every selected item is outlined and a group is
  boxed, so a drag no longer moves something you did not know you had
- Right-click anything on the map for a menu of what applies to it: layer order,
  duplicate, pin and delete on an effect; remove from map on a token; paste where you
  clicked on open ground

### Effects that follow a character
- An effect can be pinned to a player and travels with them — useful for anything centred
  on its caster rather than on a square
- Two ways in: the new *Pin to token* placement mode drops it straight onto them, or
  right-click an effect already on the map and pick the player
- Moving the character moves the spell, and one undo takes both back
- A token leaving the scene releases whatever was pinned to it instead of deleting it

### Placement
- The four separate snapping menus became one control, in the same place for every tool,
  always showing the setting for the tool in hand. Walls still default to square corners
  and tokens to square centres — those are different needs, not preferences — and
  *All tools* copies one setting across when you would rather they matched
- The setting is remembered between sessions

### Tools
- The toolbar holds every tool. Calibration, table framing and the anchored origin used to
  live in three unrelated panels, so their keyboard shortcuts could arm a mode with nothing
  on screen to show for it
- Every tool carries its own instructions, not just the wall editor. Dismiss one and it
  stays dismissed for that tool, between sessions
- The armed tool reads at a glance instead of through a one-pixel border

### Safety
- Clearing the initiative order asks first, and can be undone
- Removing a combatant, or taking a token off a map, goes through undo
- Two confirmations claimed the action could not be undone when it could

### Fixes, interface work and quality of life
- Anchoring a measurement origin left the map unresponsive until another tool was picked
- The table screen was showing the DM's selection
- Messages no longer overwrite each other when several arrive at once
- Assorted bug fixes, interface tidying and small quality-of-life changes throughout

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
