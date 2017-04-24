define('about',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var About = (function () {
        function About() {
        }
        return About;
    }());
    exports.About = About;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFHQSxDQUFDO1FBQUQsWUFBQztJQUFELENBSEEsQUFHQyxJQUFBO0lBSFksc0JBQUsiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWJvdXR7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('app',["require", "exports", "./todo"], function (require, exports, todo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.heading = 'My Tasks';
            this.newTodo = '';
            this.todos = [];
        }
        App.prototype.addTodo = function () {
            if (this.newTodo) {
                this.todos.push(new todo_1.Todo(this.newTodo, this.im));
                this.newTodo = '';
                this.im = '';
            }
        };
        App.prototype.removeTodo = function (todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
                if (confirm('Do you weant to delete this task')) {
                    this.todos.splice(index, 1);
                }
            }
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFDQTtRQUFBO1lBQ0MsWUFBTyxHQUFHLFVBQVUsQ0FBQztZQUNyQixZQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2IsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQStDckIsQ0FBQztRQTdDQSxxQkFBTyxHQUFQO1lBRUEsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQTtZQUNaLENBQUM7UUFFRCxDQUFDO1FBRUQsd0JBQVUsR0FBVixVQUFXLElBQUk7WUFFZixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUEsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNqQixFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUMvQyxDQUFDO29CQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsQ0FBQztZQUNELENBQUM7UUFDRCxDQUFDO1FBMEJGLFVBQUM7SUFBRCxDQWxEQSxBQWtEQyxJQUFBO0lBbERZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvJztcbmV4cG9ydCBjbGFzcyBBcHAge1xuIGhlYWRpbmcgPSAnTXkgVGFza3MnO1xuIG5ld1RvZG8gPSAnJztcbiB0b2RvcyA6IFRvZG9bXSA9IFtdO1xuIFxuIGFkZFRvZG8oKXtcbiBcbiBpZih0aGlzLm5ld1RvZG8pe1xuIHRoaXMudG9kb3MucHVzaChuZXcgVG9kbyh0aGlzLm5ld1RvZG8sdGhpcy5pbSkpO1xuIHRoaXMubmV3VG9kbyA9ICcnO1xuIHRoaXMuaW0gPSAnJ1xuIH1cblxuIH1cbiBcbiByZW1vdmVUb2RvKHRvZG8pe1xuIFxuIGxldCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcbiBpZihpbmRleCAhPT0gLTEpe1xuIGlmKGNvbmZpcm0oJ0RvIHlvdSB3ZWFudCB0byBkZWxldGUgdGhpcyB0YXNrJykpXG4ge1xuIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuIH1cbiB9XG4gfVxuIC8qcm91dGVyIDogUm91dGVyO1xuICBtZXNzYWdlID0gJ0hlbGxvIFdvcmxkISc7XG4gIFxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnIDogUm91dGVyQ29uZmlndXJhdGlvbixyb3V0ZXIgOiBSb3V0ZXIpIDogdm9pZHtcbiAgY29uZmlnLnRpdGxlID0gJ015IGFwcCc7XG4gIGNvbmZpZy5tYXAoW1xuICB7XG4gIHJvdXRlIDogWyAnJywgJ2hvbWUnIF0sXG4gIG5hbWUgOiAnaG9tZScsXG4gIG1vZHVsZUlkIDogJy4vaG9tZScsXG4gIG5hdiA6IHRydWUsXG4gIHRpdGxlIDogJ0hvbWUnXG4gIH0sXG4gIHtcbiAgcm91dGUgOiAnYWJvdXQnLFxuICBuYW1lIDogJ2Fib3V0JyxcbiAgbW9kdWxlSWQgOiAnLi9hYm91dCcsXG4gIG5hdiA6IHRydWUsXG4gIHRpdGxlIDogJ0NvbnRhY3QgVXMnXG4gIH1cbiAgXG4gIF0pO1xuICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuICAqL1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('greeting',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeting = (function () {
        function Greeting() {
            this.name = '';
        }
        Greeting.prototype.greet = function () {
            alert('Hi $(this.name)! How are you !');
        };
        return Greeting;
    }());
    exports.Greeting = Greeting;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyZWV0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7WUFHQSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBUVYsQ0FBQztRQU5ELHdCQUFLLEdBQUw7WUFFQSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUV4QyxDQUFDO1FBRUQsZUFBQztJQUFELENBWEEsQUFXQyxJQUFBO0lBWFksNEJBQVEiLCJmaWxlIjoiZ3JlZXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgR3JlZXRpbmdcclxue1xyXG5cclxubmFtZSA9ICcnO1xyXG5cclxuZ3JlZXQoKXtcclxuXHJcbmFsZXJ0KCdIaSAkKHRoaXMubmFtZSkhIEhvdyBhcmUgeW91ICEnKTtcclxuXHJcbn1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUdBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxvQkFBSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhvbWV7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('todo',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo(description, pic) {
            this.description = description;
            this.pic = pic;
            this.edit = false;
            this.done = false;
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFLQSxjQUFtQixXQUFvQixFQUFRLEdBQVk7WUFBeEMsZ0JBQVcsR0FBWCxXQUFXLENBQVM7WUFBUSxRQUFHLEdBQUgsR0FBRyxDQUFTO1lBRjNELFNBQUksR0FBRyxLQUFLLENBQUM7WUFDYixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBSWIsQ0FBQztRQUNELFdBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLG9CQUFJIiwiZmlsZSI6InRvZG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9kb1xyXG57XHJcblxyXG5lZGl0ID0gZmFsc2U7XHJcbmRvbmUgPSBmYWxzZTtcclxuY29uc3RydWN0b3IocHVibGljIGRlc2NyaXB0aW9uIDogc3RyaW5nLHB1YmxpYyBwaWMgOiBzdHJpbmcpe1xyXG5cclxuXHJcbn1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!about.html', ['module'], function(module) { module.exports = "<template><style>.jumbotron{background:#358cce;color:#fff;border-radius:0}.jumbotron-sm{padding-top:24px;padding-bottom:24px}.jumbotron small{color:#fff}.h1 small{font-size:24px}</style><div class=\"jumbotron jumbotron-sm\"><div class=\"container\"><div class=\"row\"><div class=\"col-sm-12 col-lg-12\"><h1 class=\"h1\">Contact us <small>Feel free to contact us</small></h1></div></div></div></div><div class=\"container\"><div class=\"row\"><div class=\"col-md-8\"><div class=\"well well-sm\"><form><div class=\"row\"><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\" required=\"required\"></div><div class=\"form-group\"><label for=\"email\">Email Address</label><div class=\"input-group\"><span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-envelope\"></span> </span><input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" required=\"required\"></div></div><div class=\"form-group\"><label for=\"subject\">Subject</label><select id=\"subject\" name=\"subject\" class=\"form-control\" required=\"required\"><option value=\"na\" selected=\"\">Choose One:</option><option value=\"service\">General Customer Service</option><option value=\"suggestions\">Suggestions</option><option value=\"product\">Product Support</option></select></div></div><div class=\"col-md-6\"><div class=\"form-group\"><label for=\"name\">Message</label><textarea name=\"message\" id=\"message\" class=\"form-control\" rows=\"9\" cols=\"25\" required=\"required\" placeholder=\"Message\"></textarea></div></div><div class=\"col-md-12\"><button type=\"submit\" class=\"btn btn-primary pull-right\" id=\"btnContactUs\">Send Message</button></div></div></form></div></div><div class=\"col-md-4\"><form><legend><span class=\"glyphicon glyphicon-globe\"></span> Our office</legend><address><strong>Twitter, Inc.</strong><br>795 Folsom Ave, Suite 600<br>San Francisco, CA 94107<br><abbr title=\"Phone\">P:</abbr> (123) 456-7890</address><address><strong>Full Name</strong><br><a href=\"mailto:#\">first.last@example.com</a></address></form></div></div></div></template>"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\"><div class=\"container\"><div class=\"col-lg-12\"><h1 class=\"text-primary\">${heading}</h1></div><div class=\"row\"><form submit.trigger=\"addToDo()\"><div class=\"col-lg-6\"><input value.bind=\"newTodo\" class=\"form-control\" placeholder=\"Enter Task \"></div><div class=\"col-lg-4\"><input class=\"form-control\" value.bind=\"im\" placeholder=\"Image\"></div><div class=\"col-lg-2\"><button class=\"btn btn-primary\" click.trigger=\"addTodo()\">Add Task</button></div></form></div><div class=\"col-lg-12\" style=\"margin-top:50px\"><img if.bind=\"im\" src.bind=\"im\" width=\"100\" height=\"100\" class=\"img-circle\"></div><div class=\"col-lg-12\" style=\"margin-top:100px\"><table class=\"table\"><th>Completed</th><th>Task</th><th>Operation</th><tr repeat.for=\"todo of todos\"><td><input type=\"checkbox\" checked.bind=\"todo.done\"> <img src.bind=\"todo.pic\" width=\"40\" height=\"40\" class=\"img-circle\"></td><td><span css=\"text-decoration: ${todo.done ?'line-through':'none'}\">${todo.description}</span></td><td><button class=\"btn btn-danger\" click.trigger=\"removeTodo(todo)\"><span class=\"glyphicon glyphicon-trash\"></span></button></td></tr></table></div></div></template>"; });
define('text!greeting.html', ['module'], function(module) { module.exports = "<template><input value.bind=\"name\"> <button click.trigger=\"greet()\">Greet Me</button></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><h1 class=\"text-primary\">Home Page</h1><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></template>"; });
//# sourceMappingURL=app-bundle.js.map