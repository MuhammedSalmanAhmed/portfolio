@echo off
echo ================================
echo Portfolio Setup Script
echo ================================
echo.
echo Installing dependencies...
echo.

npm install

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to install dependencies
    echo Please make sure Node.js and npm are installed
    pause
    exit /b 1
)

echo.
echo ================================
echo Setup completed successfully!
echo ================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
pause
