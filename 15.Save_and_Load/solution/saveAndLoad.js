function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputText").value;
	var textFile = new Blob([textToWrite], {type:'text/plain'});
	var saveFileAs = document.getElementById("fileName").value;

	var saveFile = document.createElement("a");
	saveFile.download = saveFileAs;
	saveFile.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		saveFile.href = window.webkitURL.createObjectURL(textFile);
	}
	else
	{
		saveFile.href = window.URL.createObjectURL(textFile);
		saveFile.onclick = destroyClickedElement;
		saveFile.style.display = "none";
		document.body.appendChild(saveFile);
	}

	saveFile.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}

function loadFileAsText()
{
	var load = document.getElementById("load").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		document.getElementById("inputText").value = textFromFileLoaded;
	};
	fileReader.readAsText(load, "UTF-8");
}