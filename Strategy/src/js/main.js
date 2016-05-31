import {JsonLoaderModern} from "./lib/JsonLoaderModern";
import {JsonLoaderJQuery} from "./lib/JsonLoaderJQuery";
import {JsonLoaderXMLHttp} from "./lib/JsonLoaderXMLHttp";
import {JsonPrinter} from "./lib/JsonPrinter";

let jsonFetch = new JsonLoaderModern(),
	jsonJQuery = new JsonLoaderJQuery(),
	jsonXMLHttp = new JsonLoaderXMLHttp(),
	printer = new JsonPrinter("test", document.body);


printer.loader = jsonFetch;
printer.container = ".fetch";
printer.printJson("./src/assets/phones.json");

printer.loader = jsonJQuery;
printer.container = ".ajax";
printer.printJson("./src/assets/phones.json");

printer.loader = jsonXMLHttp;
printer.container = ".xml-http";
printer.printJson("./src/assets/phones.json");
