/**
 * <div id="parent">
 *     <div id="child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 * </div>
 *
 *ReactElement(Object)
 */

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm an h1 tag"),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);

const parent1 = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, 'Heading1'),
    React.createElement('h2', {}, 'Heading 2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, 'Heading 1'),
    React.createElement('h2', {}, 'Heading 2'),
  ])
);

const root1 = ReactDOM.createRoot(document.getElementById('root'));

root1.render(parent1);
