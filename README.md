## ironSource Assignment (Backend)

run `npm install`

The environment variables are saved in the form VARNAME underscore NODE_ENV so that
it can be splitted by underscore into variables for the respective environments. Therefor, you must create a `.env` file and provide values for the following environment variables.

```js
NODE_ENV = "eg. development";
DB_CONNECTION_STRING_development =
	"eg. mongodb://localhost/ironsource_assignment";
DB_CONNECTION_STRING_production = "eg. mongodb+srv://user.blablaba/...";
```

After setting the above, you can start the server.

Go Live -> https://ironsource-assignment.vercel.app/

FrontEnd Repo -> https://github.com/julius-ek-hub/ironsource-assignment/
