// Code block copy functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add copy buttons to all code blocks
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(function(codeBlock) {
    // Skip if already has copy button
    if (codeBlock.querySelector('.copy-button')) return;
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = `
      <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span class="copy-text">Copy</span>
    `;
    
    // Add click event
    copyButton.addEventListener('click', function() {
      const code = codeBlock.querySelector('code');
      const text = code ? code.textContent : codeBlock.textContent;
      
      // Copy to clipboard
      navigator.clipboard.writeText(text).then(function() {
        // Show success feedback
        copyButton.innerHTML = `
          <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          <span class="copy-text">Copied!</span>
        `;
        copyButton.classList.add('copied');
        
        // Reset after 2 seconds
        setTimeout(function() {
          copyButton.innerHTML = `
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          `;
          copyButton.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyButton.innerHTML = `
          <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
          <span class="copy-text">Copied!</span>
        `;
        copyButton.classList.add('copied');
        
        setTimeout(function() {
          copyButton.innerHTML = `
            <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span class="copy-text">Copy</span>
          `;
          copyButton.classList.remove('copied');
        }, 2000);
      });
    });
    
    // Add button to code block
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyButton);
  });
});