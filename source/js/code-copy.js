// Simple and effective code block copy functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add copy buttons to all code blocks (but avoid duplicates)
  const codeBlocks = document.querySelectorAll('pre:not([data-copy-added])');
  
  codeBlocks.forEach(function(codeBlock) {
    // Mark as processed
    codeBlock.setAttribute('data-copy-added', 'true');
    
    // Create simple copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-btn';
    copyButton.innerHTML = '📋';
    copyButton.title = 'Copy code';
    
    // Add click event
    copyButton.addEventListener('click', function(e) {
      e.preventDefault();
      const code = codeBlock.querySelector('code');
      const text = code ? code.textContent : codeBlock.textContent;
      
      // Copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
          copyButton.innerHTML = '✅';
          setTimeout(function() {
            copyButton.innerHTML = '📋';
          }, 1500);
        });
      } else {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copyButton.innerHTML = '✅';
        setTimeout(function() {
          copyButton.innerHTML = '📋';
        }, 1500);
      }
    });
    
    // Add button to code block
    codeBlock.appendChild(copyButton);
  });
});