A dictionary in Python is what in other languages we would call an Ordered Hashmap. Its a set of keys and associated values. If you know the key, the machine can get the value extremely quickly.

A dictionary looks like this:

```py
cat_powers = {
    'Floofy': 'Flight',
    'Jammy': 'Dodging',
    'Flakey': 'Speed'
}
```

Get an element from a dictionary like this:

cat_powers['Jammy']

If you try to access a key that doesn't exist you'll get a KeyError.

## Inserting values

You can insert a new value using the array syntax:

```py
cat_powers['Michael'] = 'Lasers'
```

Note that you can also overwrite a value if you reuse a key, so be careful.

## Handy methods

If you want just the keys, or just the values:

```py
cat_powers.keys()
# ['Floofy', 'Jammy', 'Flakey']

cat_powers.values()
# ['Flight', 'Dodging', 'Speed']
```

If you want both, you can convert the Dictionary to an Array of Tuples with the items method:

```py
cat_powers.items()
# [('Floofy', 'Flight'), ('Jammy', 'Dodging'), ('Flakey', 'Speed')]
```

## Hashmaps are Ordered

Note that the arrays you get out will be ordered in Python version 3.7 and above. This is actually pretty useful. Hashmaps are not inherantly ordered, they're just a bag of keys and values, but modern Python keeps them ordered for you.

Because they're ordered, we can pop from them, like an array.

<div class="exercise">
## Exercise - Cats and Leetcode

Assume I have a dictionary of cats, each with a power:

cats = {"alfy": "guns", "bert": "lasers", "chewy": "guns"}

We can see that Alfy and Chewy have the same power. I want to collect all the cats together that have the same power, using that power as the key. The output should look like this:

{'guns': ['alfy', 'chewy'], 'lasers': ['bert']}

Please write code to do this.

### Answers

First let's create a new dict to write the result to:

out = {}

Now we convert cats to an array of tuples, and use parallel assignment to get the keys and values. If the value is already a key in the new array, append the cat to that value. If not, create an array to hold it.

```py
for key, value in cats.items():
    if value in out:
        out[value].append(key)
    else:
        out[value] = [key]

print(out)
```

</div>
