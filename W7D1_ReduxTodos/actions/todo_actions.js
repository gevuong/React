

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos //payload items
}); // implicit return with ({ })

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
