## Brief
Your challenge is to create a hero builder, where players can customize a DnD-style hero and view the result. Please use **React**

Using a 3-step process, the player will select a hero class, customize hero skills by assigning points and preview the final result.

**Hints**
1. Heroes and skills are randomized (see API below); the app should adapt to the given data.
2. The app should be responsive

## Design
In the **design** folder you'll find a simple wireframe to demonstrate the required flow. The final look and feel is up to you - go wild!  
You are _not_ evaluated on artistic skills, but _are_ expected to provide an aesthetic and usable end product.

## Behavior

### Step 1: Hero Selection
The player sees the name and avatar of each available hero class (between 2-4 classes, see API below). A choice must be made to continue.

### Step 2: Skill Customization
The player gets 100 skill points, freely assignable to the hero's  skills (such as Stamina, Strength, Armor...). The exact skills may change depending on class (between 2-6 skills, see API below).

**Skill behavior**
1. Each skill starts at 0.
2. The skills cannot total _more_ than 100 points at any time.
3. It should always be possible to assign any 0-100 value to a given skill. Given rule (2), if this gets us over 100 total points, the excess automatically, immediately, removed from the other skills, according to their current values.
4. It's not required to use all 100 points (or any).
5. A skill's value is always an integer.

**Example**

- We start with:  
  Stamina: 0 | Speed: 0 | Armor: 0 | Strength: 0 | _Remaining: 100_

- The player adds 50 Speed.  
  Stamina: 0 | Speed: 50 | Armor: 0 | Strength: 0 | _Remaining: 50_

- The player adds 25 Armor.  
  Stamina: 0 | Speed: 50 | Armor: 25 | Strength: 0 | _Remaining: 25_

- The player now adds 40 Stamina. The excess is automatically reduced from the other skills, weighted by their current values.  
  Stamina: 40 | Speed: 40 | Armor: 20 | Strength: 0 | _Remaining: 0_

- The player then reduces Speed to 10.  
  Stamina: 40 | Speed: 30 | Armor: 20 | Strength: 0 | _Remaining: 10_

- Finally, the player sets Strength to 100.  
  Stamina: 0 | Speed: 0 | Armor: 0 | Strength: 100 | _Remaining: 0_

### Step 3: View Result
The player is presented with a read-only summary of their hero's class, avatar and skills.

## API
Send a GET to  
`https://frontend-interview-hero-63u64o32qq-uk.a.run.app/heroes`

Response will include available heroes (between 2-4), for each:
- hero name
- hero portrait as relative path, example:  
  `/portraits/orc.png` becomes `https://frontend-interview-hero-63u64o32qq-uk.a.run.app/portraits/orc.png`
- hero skills (between 2-6)

** Note the response is randomized

## Submission
Please organize your code and push your changes to the master branch.
___
All the best,  
The StreamElements team
