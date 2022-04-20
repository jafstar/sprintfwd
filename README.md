# Welcome

## Assignment

Create a ReactJS app that lets you see a list of members, a list of teams and a To-do list.

### Pages

* Members page: Show a read-only table of members and their associated team names
* Teams page: Show a read-only table of teams and the count of team members for each team
* To-do list page: Show a To-do list where the user can index/create/update/delete items

### Deliverables

* Demonstrate the use of React hooks
* Demonstrate the knowledge of modular components
* Demonstrate the knowledge of vanilla CSS styling without using a framework
* Demonstrate the ability to create responsive pages
* Good UX for styling of pages and components
* All the three pages share the same header with navigation to go to the other pages

### Bonus

* Team details page: When you click the team name on Page 1, it takes you to a team details page with a list of its members.

### Mock Data

Teams:

```json
{
  "teams": [
    {
      "id": 1,
      "name": "Project",
      "member_count": 2
    },
    {
      "id": 2,
      "name": "Engineering",
      "member_count": 4
    },
    {
      "id": 3,
      "name": "Design",
      "member_count": 2
    },
    {
      "id": 4,
      "name": "QA",
      "member_count": 2
    }
  ]
}
```

Users:

```json
{
  "members": [
    {
      "id": 1801,
      "first_name": "Bonnie",
      "last_name": "Doyle",
      "email": "bonnie.doyle@email.com",
      "team": {
        "id": 1,
        "name": "Project"
      }
    },
    {
      "id": 1201,
      "first_name": "Siu",
      "last_name": "Maggio",
      "email": "siu.maggio@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 2101,
      "first_name": "Nella",
      "last_name": "Brakus",
      "email": "nella.brakus@email.com",
      "team": {
        "id": 3,
        "name": "Design"
      }
    },
    {
      "id": 1008,
      "first_name": "Clayton",
      "last_name": "Connelly",
      "email": "clayton.connelly@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 3123,
      "first_name": "Vernia",
      "last_name": "Purdy",
      "email": "vernia.purdy@email.com",
      "team": {
        "id": 1,
        "name": "Project"
      }
    },
    {
      "id": 1821,
      "first_name": "Coretta",
      "last_name": "Homenick",
      "email": "coretta.homenick@email.com",
      "team": {
        "id": 4,
        "name": "QA"
      }
    },
    {
      "id": 2712,
      "first_name": "Wilson",
      "last_name": "O'Hara",
      "email": "wilson.o'hara@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 1722,
      "first_name": "Deanna",
      "last_name": "Kuvalis",
      "email": "deanna.kuvalis@email.com",
      "team": {
        "id": 2,
        "name": "Engineering"
      }
    },
    {
      "id": 2213,
      "first_name": "Rafaela",
      "last_name": "Kiehn",
      "email": "rafaela.kiehn@email.com",
      "team": {
        "id": 4,
        "name": "QA"
      }
    },
    {
      "id": 1911,
      "first_name": "Jeffry",
      "last_name": "Block",
      "email": "jeffry.block@email.com",
      "team": {
        "id": 3,
        "name": "Design"
      }
    }
  ]
}
```
