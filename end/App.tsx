import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import TranslateIcon from '@mui/icons-material/Translate';
import { Box, Button, Link, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { format, Locale } from "date-fns";
import { enUS, es, ja } from "date-fns/locale";
import { useMemo, useState } from 'react';

const App = ():JSX.Element => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage('en-US');
    }, []);
    const todaysDate = new Date().toString();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const [userLang, setUserLang] = useState<Locale>(enUS);
    const [userDate, setUserDate] = useState<string>('');
    const [clickCount, setClickCount] = useState<number>(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
    }
    const handleMenuClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const getUserLangLocale = ((language: string) => {
        switch (language) {
            case 'en-US': return enUS;
            case 'es': return es;
            case 'ja': return ja;
            default: return enUS
        }
    })

    const handleMenuItemClick = (event: any) => {
        const newLang = event.target.id;
        i18n.changeLanguage(newLang).then();
        setUserLang(getUserLangLocale(newLang));
    }


    useMemo(() => {
        setUserDate(format(todaysDate, 'MMM/dd/yyyy', { locale: userLang }));
    }, [userLang])


    return (
        <Box sx={{
            padding: 8,
            width: 900,
            maxWidth: 1280
        }}>
            <Box>
                <Stack direction='row' sx={{
                    justifyContent: 'space-between'
                }}>
                    <Typography variant="body1">{userDate}</Typography>
                    <Button onClick={handleMenuClick}>
                        <TranslateIcon />
                        {t('language')}
                    </Button>
                    <Menu
                        open={open}
                        anchorEl={anchorEl}
                    >
                        <MenuItem onClick={handleMenuItemClick} id='enUS'>English</MenuItem>
                        <MenuItem onClick={handleMenuItemClick} id='es'>Español</MenuItem>
                        <MenuItem onClick={handleMenuItemClick} id='ja'>日本語</MenuItem>
                    </Menu>
                </Stack>
            </Box>
            <Box>
                <Typography variant="h1">{t('greeting')}</Typography>
                <Typography variant="body1" gutterBottom>{t('greeting_message')}</Typography>

                <Button
                    variant='outlined'
                    onClick={handleClick}>
                    {t('button_cta')}
                </Button>
                {(clickCount > 0) && (
                    <Typography variant="caption" sx={{
                        display: 'block',
                        marginTop: '8px'
                    }}>
                        {t('click_message', { count: clickCount })}
                    </Typography>
                )}
            </Box>

            <Stack direction='row' justifyContent='center'>
                <Button>
                    <Link href="https://medium.com/" target="_blank" title="Translation Tutorial">
                        <Typography variant="body1">Translation Tutorial</Typography>
                    </Link>
                </Button>
                <Button>
                    <Link href="https://github.com/hurrendor/" target="_blank" title="View Code">
                        <Typography variant="body1">View Code</Typography></Link>
                </Button>
            </Stack>
        </Box>
    )
};

export default App
