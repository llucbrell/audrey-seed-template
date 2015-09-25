# How to write your own audrey-two seed

## Clone this repository with git

```js
$ git clone https://github.com/llucbrell/audrey-seed-template.git
```
## Write

Now, open the index.js on your favorite text editor and beggin to write your code into the start() method.

## Objects and methods you can use

You can use whatever object that it's placed on the view. Audrey pass to each seed a complete object view. 

Now le tm explain, to make your life easy, I've make some work for you in this template.

You can use the object "view[name]"" literally and you'll get the user's content associated with your taggy seed. Whatever content the user put with the taggy is associated with your module and you'll find into this object.

I've added two methods commented, one for checking if the user defined your object, other for colors. Uncomment checkProperties or/and if you want to check for the colors definition. Uncomment checkColors and this method will create a new object with a default color in the view-object only if the user doesn't define the color for your seed. 

## Scions Power

If you want to build a scion, do the same operations, but make sure you call to 
```js
process.exit()
```
at the end of your operations, to return the control to audrey-two. Rem ember to use x in the taggy for testing and of course to tell to your users that it's a scion.

## License

Put a license on your adurey-seed.

## Test it

Now I'm working in a set of test for seeds. It will be release soon.

## Publish

You can store, share, eat, replant, burn or whatever you want with your seeds. There is no limits. Of course, if you want, you can publish into npm or any other place. And if you want you can show me your work, I've be deligthed to hear about your work.

```js
npm publish
```

And that's all folks!