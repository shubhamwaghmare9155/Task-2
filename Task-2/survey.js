//function for validation

function formValidation
{
	var fnm = document.registration.fnm;
	var lnm = document.registration.lnm;
	var emailid = document.registration.emailid;
	var mno = document.registration.mno;
	var add = document.registration.add;
	if(allLetter(fnm))
	{
		if(allLetter(lnm))
		{
			if(ValidateEmail(emailid))
			{
				if(allnumeric(mno))
				{
					if(allLetter(add))
					{

					}
				}
			}
		}
	}
	return false;
}

//function for validating fnm 

function allLetter(fnm)
{
	var letters = /^[a-zA-Z ]+$/;
	if(fnm.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('First Name Must Have Alphabet Characters Only');
		fnm.focus();
		return false;
	}
}

//function for validating lnm

function allLetter(lnm)
{
	var letters = /^[a-zA-Z ]+$/;
	if(lnm.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('First Name Must Have Alphabet Characters Only');
		lnm.focus();
		return false;
	}
}

//function for validating emailid

function ValidateEmail(emailid)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(emailid.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert('You Have Entered An Invalid Email Address....');
		emailid.focus();
		return false;
	}
}

//function for validating mno

function allnumeric(mno)
{
	var no = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]??(\d{4})$/;
	if(mno.value.match(no))
	{
		return true;
	}
	else
	{
		alert('You Have Entered An Invalid Mobile Number');
		mno.focus();
		return false;
	}
}

//function for validating add

function allLetter(add)
{
	var letters = /^[0-9a-zA-Z]+$/;
	if(fnm.value.match(letters))
	{
		return true;
	}
	else
	{
		alert('First Name Must Have Alphabet Characters Only');
		fnm.focus();
		return false;
	}
}