import React from "react";
const Facebook = () => (
  <img
    className="icon big"
    src="data:image/png;base64,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"
  />
);
const Instagram = () => (
  <img
    className="icon big"
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2M2U0MDEzMS01OGEzLTRjODktYmZiMi02MjUxMzY4ZDlhNWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3RkRFRkEwN0ZCMTFFQTlBOTg5MjlGMDU1RDcxM0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3RkRFRjkwN0ZCMTFFQTlBOTg5MjlGMDU1RDcxM0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NmRhMmQxMS1mOWFkLTQ5NTItYTIwNi0xYzM4MjFlM2IwMzciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MjFhZGU5OC03NGQxLTExNzktYTZh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"
  />
);
const Whatsapp = () => (
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3RkRFRkQwN0ZCMTFFQTlBOTg5MjlGMDU1RDcxM0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3RkRFRkUwN0ZCMTFFQTlBOTg5MjlGMDU1RDcxM0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTdGREVGQjA3RkIxMUVBOUE5ODkyOUYwNTVENzEzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTdGREVGQzA3RkIxMUVBOUE5ODkyOUYwNTVENzEzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkaVGA0AABi0SURBVHja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"
    className="icon small"
  />
);

export { Facebook, Instagram, Whatsapp };