

export function uniqueId() {
  return new Date().getTime();
}

$.ajax({ method: 'GET', url: '/api/todos' }).then(
  todos => console.log(todos),
  error => console.log(error)
 );

 export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/todos'
  })
);

window.fetchTodos = fetchTodos;
