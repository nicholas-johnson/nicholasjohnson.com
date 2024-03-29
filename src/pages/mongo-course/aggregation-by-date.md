---
layout: ../../layouts/Course.astro
course: mongoCourse
title: Grouping by date - producing stats
description: We can use the date functions to group by date and output stats. Pipe through project and generate date for a graph.
section: mongo
exercise: aggregation-by-date
---

# Aggregation by date

Stats are cool. People love stats. We can use Mongo to generate a timeline showing day by day activity.

To do this we will need to group by date. First we add fields to our documents representing year, month and dayOfMonth. Then we group by these fields. We can count to get an aggregate, or filter based on some parameter.

_For clarity, I have separated this into group and project stages so you can see how the pipeline changes. You could roll these two steps into a single $group stage:_

```js
db.competitionentries.aggregate(
  {
    $project: {
      year: { $year: date },
      month: { $month: date },
      dayOfMonth: { $dayOfMonth: date },
    },
  },
  {
    $group: {
      _id: {
        year: "$year",
        month: "$month",
        dayOfMonth: "$dayOfMonth",
      },
      count: {
        $sum: 1,
      },
    },
  }
);
```

## Exercise - Holidays!

- Download the holidays dataset from here.

<http://nicholasjohnson.com/mongo/datasets/holidays.json>

- Now import it into Mongo using mongoimport, something like this:

```js
  mongoimport --db holidays --collection holidays --file holidays.json
```

=code(code, :bash)

- Group the data by year, month and dayOfMonth. Be aware that not every holiday has a date. You may generate the dynamic fields with $project, or directly in $group \_id.
- $push the holiday name into the result set.
- Sort by year, month and dayOfMonth.

You now have a calendar of events for the year.

## Exercise - the biggest day

- Add a $count to the $group operator and remove the $push.
- Sort the data by count. Which day has the most holidays?
- Which month has the most holidays?

## Harder Exercise - bell curve

- Add another group stage. Group your result set by the count field you generated in the previous step. We can say how many days have one holiday, how many have 2, how many have 3, etc.
- Sort by this new count field. You should see a nice bell curve with the median around 3, and a long tail.
- Use $project to tidy your results.

Why might this be useful? Imagine instead of holidays, we have a list of customer complaints. We can now find how customer complaints are distributed, which might be useful.

.downloads

[Code from the board](https://www.dropbox.com/sh/wkl82kowjdt7kr8/AABK-5iGAtjX1pfqzzGh9GDCa?dl=1)
