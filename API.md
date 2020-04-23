### API Declaration

1. Search Movie

Request:
```javascript
data = {
    form: {
        Genre: "Drama",
        Title: "Forest Gump",
        date1: "", // currently not used
        date2: "", // currently not used
        delivery: false, // currently not used
        desc: "", // currently not used
        Order: "Order by Rating",
    },
    Rating: [4, 8]
}
```

Response:
```javascript
data = {
         "list": [{
             'Title': "Movie 1",
             'Language': 'CN',
             'ReleaseDate': 1991,
             'Introduction': 'Intro 1',
             'Duration': '121 min'
           },
           {
             'Title': "Movie 2",
             'Language': 'CN',
             'ReleaseDate': 1992,
             'Introduction': 'Intro 2',
             'Duration': '122 min'
           },
           {
             'Title': "Movie 3",
             'Language': 'CN',
             'ReleaseDate': 1993,
             'Introduction': 'Intro 3',
             'Duration': '123 min'
           },
         ]
       }
```

2. Search Celebrity

Request:
```javascript
data = {
    form: {
        CelebrityName: "fuck"
    }
}
```

Response:
```javascript
data = {
         "list": [{
             uid: 1001,
             Name: 'abc1',
             Gender: 'M',
             DateOfBirth: 1991
           },
           {
             uid: 1002,
             Name: 'abc2',
             Gender: 'M',
             DateOfBirth: 1992
           },
           {
             uid: 1003,
             Name: 'abc1',
             Gender: 'M',
             DateOfBirth: 1993
           },
         ]
       }
```
