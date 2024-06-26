# Emacs Integration

Emacs' built in file manager Dired is often used to browse files. And Emacs is often used in WSL on Windows, because the windows-native GNU Emacs is kind of meh.
But sadly some typical files we have to deal with on windows are files Emacs can't handle very well. (Mostly MS Office files)

To use Emacs' Dired in WSL Emacs to open files in Windows, the `wslview` command from Wslutilities can be used.

Put this in init.el:
```emacs-lisp
(defun my/wslview-open(&optional @fname)
  "Use wslview to open file in Windows."
  (interactive)
  (let* (
         ($file-list
          (if @fname
              (progn (list @fname))
            (if (string-equal major-mode "dired-mode")
                (dired-get-marked-files)
              (list (buffer-file-name)))))
         ($do-it-p (if (<= (length $file-list) 5)
                       t
                     (y-or-n-p "Open more than 5 files? "))))
    (when $do-it-p
        (mapc
         (lambda ($fpath)
           (shell-command
            (concat "wslview " (shell-quote-argument $fpath))))  $file-list)
        (when (not (string-equal major-mode "dired-mode"))
            (revert-buffer)))))
```

Now, when you mark files in Dired using `m` (or if nothing is marked, the file under point is used) run `M-x my/wslview-open` to open the marked files using whatever is the appropriate program in Windows.
If more then five files where marked, Emacs will prompt in the minibuffer if that many files should really be opened.
Also, if you are not in a Dired buffer and you run `M-x my/wslview-open`, the file of the currently open buffer will be opened with the appropriate program in Windows.
